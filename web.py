
from selenium import webdriver
#from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
#cap = DesiredCapabilities().Firefox
#cap["marionette"] = False



from selenium.webdriver.chrome.options import Options


executable_path = "/Users/ASUS-X405U/chromedriver.exe"


chrome_options = Options()
chrome_options.add_extension('/Users/ASUS-X405U/Documents/Metamask.crx')

driver = webdriver.Chrome(executable_path=executable_path, chrome_options=chrome_options)


driver.get("http://192.168.0.24:3000/automoviles.html")
button = driver.find_element_by_xpath('/html[1]/body[1]/section[1]/div[2]/div[3]/button[1]')
button.click()

