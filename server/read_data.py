from flask_cors import CORS
import simplejson as json

def dict_to_array(data_dict):
  return [dict(dd) for dd in data_dict]

def convert_to_json(query_data):
  return json.dumps(dict_to_array(query_data), default=str)

def read_all_data(cur):
  cur.execute(f"""
    SELECT 
      *
    FROM 
      some_table
  """)

  allData = cur.fetchall()

  return allData
