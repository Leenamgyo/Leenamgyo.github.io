---
layout: default
title: 예제 - Polling(Python)
parent: Web Socket
nav_order: 11
---

# WebSocket 예제 - Polling
{: .fs-9 }

WebSocket은 HTTP Polling에 비해 실시간 양방향 통신, 낮은 레이턴시, 적은 오버헤드, 서버 부하 감소, 효율적인 데이터 전송 등의 장점을 제공합니다. 따라서 실시간 웹 애플리케이션을 구현할 때 WebSocket을 사용하는 것이 더 효율적입니다


### Server.py
아래 코드에서는 Binance 거래소의 WebSocket API에서 실시간 비트코인(BTC/USDT) 가격 데이터를 받아와, 이를 로컬 WebSocket 서버를 통해 클라이언트에게 전달하는 예시입니다. 다음은 코드의 상세 설명입니다.
```python
import asyncio
import websockets
import json

async def get_stock_price(websocket, path):
    uri = "wss://stream.binance.com:9443/ws/btcusdt@trade"
    async with websockets.connect(uri) as binance_ws:
        print("Connected to Binance WebSocket API")
        try:
            while True:
                # Binance에서 실시간 데이터를 수신
                message = await binance_ws.recv()
                data = json.loads(message)

                # 현재 가격 추출
                price = data["p"]

                # 클라이언트에게 실시간 가격 전송
                await websocket.send(f"Current BTC/USDT Price: {price}")
                print(f"Sent price: {price}")

        except websockets.ConnectionClosed:
            print("WebSocket connection closed.")

async def main():
    # WebSocket 서버 실행 (localhost:8765)
    async with websockets.serve(get_stock_price, "localhost", 8765):
        print("WebSocket server started on ws://localhost:8765")
        await asyncio.Future()  # 서버 유지

if __name__ == "__main__":
    asyncio.run(main())
```


### Client.py
아래 코드는 Python으로 작성된 WebSocket 클라이언트입니다. 이 클라이언트는 ws://localhost:8765 주소의 WebSocket 서버에 연결하고, 서버에서 전송하는 실시간 데이터를 수신하여 콘솔에 출력합니다.
```python
import asyncio
import websockets

async def receive_stock_price():
    uri = "ws://localhost:8765"  # 서버 주소
    async with websockets.connect(uri) as websocket:
        print("Connected to WebSocket server")
        while True:
            # 서버로부터 실시간 가격 수신
            message = await websocket.recv()
            print(message)

if __name__ == "__main__":
    asyncio.run(receive_stock_price())

```

## 실행 
- 클라이언트는 WebSocket 연결을 통해 실시간 데이터를 손쉽게 수신할 수 있습니다.
- 비동기적으로 메시지를 처리할 수 있어, 실시간 통신에 적합합니다.
- 이 구조는 실시간 채팅, 주식/암호화폐 가격 모니터링, 실시간 알림 서비스 등에 활용할 수 있습니다.

```
Connected to WebSocket server
Received from server: Current BTC/USDT Price: 38742.58
Received from server: Current BTC/USDT Price: 38750.12
Received from server: Current BTC/USDT Price: 38747.86
Received from server: Current BTC/USDT Price: 38745.22
```
