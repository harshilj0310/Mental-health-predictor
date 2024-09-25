import requests
import streamlit as st
import os
from dotenv import load_dotenv
load_dotenv()
 

# def get_openai_response(input_text):
#     response=requests.post("http://localhost:8000/essay/invoke",
#     json={'input':{'topic':input_text}})

#     return response.json()['output']['content']

def get_ollama_response(input_text):
    response=requests.post(
    "http://localhost:8000/soln_mental_health/invoke",
    json={'input':{'topic':input_text}})

    return response.json()['output']

    ## streamlit framework

st.title('Langchain Demo With LLAMA2 API')
# input_text=st.text_input("Write an essay on")
input_text1=st.text_input("Write a soln for ")

# if input_text:
#     st.write(get_openai_response(input_text))

if input_text1:
    st.write(get_ollama_response(input_text1))
