
from flask import Flask, request
books = []
app = Flask(__name__)

@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'
@app.route('/1')
def hello():
  q = request.args.get('q')
  print(q)
  return { "message": "Hello!" }, 201
@app.route('/book',methods = ['POST','GET'])
def book():
    if request.method == 'POST':
        body = request.get_json()
        books.append(body)

        return {"message" : "Book already add", "body" : body}
    elif request.method == 'GET':
        return {"book" : books },200



if __name__ == '__main__':
    app.run()
