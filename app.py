from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/sumar', methods=['POST'])
def sumar():
  data = request.get_json()
  num1 = data['num1']
  num2 = data['num2']
  suma = num1 + num2
  return jsonify({'resultado': suma})

if __name__ == '__main__':
  app.run(debug=True)
