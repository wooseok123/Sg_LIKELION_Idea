from ssl import VerifyFlags
import requests
from bs4 import BeautifulSoup

headers = {'User-Agent':'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'}


url = 'http://www.sogang.ac.kr/front/boardlist.do?bbsConfigFK=141&menuGubun=1&searchLowItem=ALL&searchField=ALL&searchValue=&currentPage=1'

response = requests.get(url, headers=headers,verify=False)

if response.status_code == 200:
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')
    sch1 = soup.select_one('span.text')
    print(sch1)
else : 
    print(response.status_code)