import requests
from bs4 import BeautifulSoup

url = 'http://www.sogang.ac.kr/front/boardlist.do?bbsConfigFK=141&menuGubun=1&searchLowItem=ALL&searchField=ALL&searchValue=&currentPage=1'

response = requests.get(url)

if response.status_code == 200:
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')
    sch1 = soup.select_one('span.text')
    print(sch1)
else : 
    print(response.status_code)