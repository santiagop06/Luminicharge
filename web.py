
from selenium import webdriver
#from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
#cap = DesiredCapabilities().Firefox
#cap["marionette"] = False

driver = webdriver.Firefox()
driver.get("http://172.17.118.235/")
button = driver.find_element_by_xpath('/html[1]/body[1]/input[1]')
button.click()

