from fastapi import FastAPI
from langchain.prompts import ChatPromptTemplate
# from langchain.chat_models import ChatOpenAI
from langserve import add_routes
import uvicorn 
import os
from langchain_community.llms import Ollama 
from dotenv import load_dotenv

load_dotenv()
# os.environ['OPENAI_API_KEY']=os.getenv("OPENAI_API_KEY")
## Langmith tracking
os.environ["LANGCHAIN_TRACING_V2"]="true"
os.environ["LANGCHAIN_API_KEY"]=os.getenv("LANGCHAIN_API_KEY")

app = FastAPI(
    title="Langchain server",
    version="1.0",
    description="a simp ;( API server"
)

# add_routes(
#     app,
#     ChatOpenAI(),
#     path="/openai"    
# )
# model = ChatOpenAI()

llm = Ollama(model="llama3")


# prompt1=ChatPromptTemplate.from_template("Write me an essay about {topic} with 100 words")
prompt2=ChatPromptTemplate.from_template("Give 2 paragraph of 30 word about {topic} considering a mentally ill person .")

# add_routes(
#     app,
#     prompt1|model,
#     path="/essay"
# )

add_routes(
    app,
    prompt2|llm,
    path="/poem"
)

if __name__=="__main__":
    uvicorn.run(app,host="localhost",port=8000)
