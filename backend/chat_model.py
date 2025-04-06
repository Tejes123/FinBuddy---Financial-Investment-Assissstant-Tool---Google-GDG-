import asyncio
from google import genai

async def main():
    client = genai.Client(api_key='AIzaSyDUrvalncbBlYRlIfLe1lLgbJfyiYlgAiU') #Replace with your real key

    chat = client.aio.chats.create(
        model='gemini-2.5-pro-exp-03-25',  # or gemini-2.0-flash-thinking-exp
    )
    response = await chat.send_message('What is a car used for?')
    print(response.text)
    response = await chat.send_message('What did you just say before this?')
    print(response.text)

if __name__ == "__main__":
    asyncio.run(main())