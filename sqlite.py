#Creacion de tablas
import sqlite3

conn = sqlite3.connect('BD.db')
c = conn.cursor()

c.execute(""" CREATE TABLE IF NOT EXISTS Admin (
    Username TEXT NOT NULL,
    Password TEXT NOT NULL) """)

c.execute(""" CREATE TABLE IF NOT EXISTS Company (
    ID INTEGER PRIMARY KEY,
    company_name TEXT NOT NULL,
    company_api_key TEXT NOT NULL) """)

c.execute(""" CREATE TABLE IF NOT EXISTS Location (
    company_id INTEGER PRIMARY KEY,
    location_name TEXT NOT NULL,
    location_country TEXT NOT NULL,
    location_city TEXT NOT NULL,
    location_meta TEXT NOT NULL) """)

c.execute(""" CREATE TABLE IF NOT EXISTS Sensor (
    location_id INTEGER PRIMARY KEY,
    sensor_id INTEGER NOT NULL,
    sensor_name TEXT NOT NULL,
    sensor_category TEXT NOT NULL,
    sensor_meta TEXT NOT NULL,
    sensor_api_key TEXT NOT NULL) """)


conn.commit()
conn.close()



    





