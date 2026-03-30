from flask import Flask, render_template, jsonify

def create_app():
    app = Flask(__name__)

    @app.route('/')
    def index():
        return render_template('index.html')
    
    @app.route('/api/hello')
    def api_hello():
        return jsonify({
            "message": "Hello Guysssss!!",
            "status": "success"
        })
    
    @app.route('/api/health')
    def api_health():
        return jsonify({"message": "API is healthy",})
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)