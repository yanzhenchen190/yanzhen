from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def index():
    img_dir = os.path.join('static', 'images')
    # 讀取圖片並排序，確保排列整齊
    images = sorted([f for f in os.listdir(img_dir) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))])
    return render_template('index.html', images=images)

if __name__ == '__main__':
    # 這裡空 4 格
    app.run(host='0.0.0.0', port=5000, debug=True)