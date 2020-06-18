import requests


q = """
{ 
    site1: website(url: "https://wikipedia.org") {
        Name: title
    }
}
"""


resp = requests.post("http://localhost:5000/", params={'query': q})
print(resp.text)