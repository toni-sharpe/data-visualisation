from flask import Flask
from flask_cors import CORS
import psycopg2
import psycopg2.extras
import simplejson as json

from read_data import convert_to_json, read_all_data

conn = psycopg2.connect(
    host="localhost",
    database="pathology",
    user="postgres",
    password="admin")

cur = conn.cursor(cursor_factory = psycopg2.extras.RealDictCursor)

all_cases = read_all_data(cur)

conn.commit()
conn.close()

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
  return "Hello world!"

@app.route("/Scatter")
def scatter():
  return process_all_cases(all_cases)

@app.route("/Gantt")
def statistics():
  return process_all_cases(all_cases)

@app.route("/TimeLine")
def timeLine():
  return process_all_cases(all_cases)

@app.route("/HistogramMaker")
def histogramMaker():
  return process_all_cases(all_cases)

@app.route("/SVG")
def svg():
  return process_all_cases(all_cases)

