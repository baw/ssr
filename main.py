import json
import os

from flask import Flask, render_template, request, jsonify
from react.render import render_component
app = Flask(__name__)

app.static_folder=app.root_path + '/build/static/'

items = {}

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    props = {
        'items': items
    }
    rendered = render_component(
        os.path.join(os.getcwd(), 'src', 'ServerIndex.js'),
        props
    )

    asset_manifest_json_str = open('./build/asset-manifest.json').read()
    asset_manifest = json.loads(asset_manifest_json_str)
    return render_template('index.html', asset_manifest=asset_manifest, rendered=rendered, props=json.dumps(props))


@app.route('/api/add_item', methods=['POST'])
def add_item():
    text = request.json.get('text')
    id = request.json.get('id')

    items[id] = text

    return jsonify(items)


@app.route('/api/remove_item', methods=['DELETE'])
def remove_item():
    id = request.args.get('id', None)

    if id in items:
        del items[id]

    return jsonify(items)
