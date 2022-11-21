import requests
import selenium
# from selenium.webdriver import Chrome
from selenium import webdriver
driver=webdriver.Chrome(executable_path="./chromedriver")

driver.get("http://www.google.com")