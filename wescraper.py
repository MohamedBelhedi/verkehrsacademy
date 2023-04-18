import requests
from bs4 import BeautifulSoup
import json

res=requests.get("https://getbootstrap.com/docs/5.0/examples/carousel/")


webscrape=BeautifulSoup(res.text, 'html.parser')



print(webscrape)

with open('webscraped.html', 'w') as f:
    f.write(str(webscrape))