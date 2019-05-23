##Tweetmaet API

This is our high-quality wobbles API. You can use this API to request
and remove different wobbles at a low wibble price.


### List wobbles

Lists all wobbles for a particular account.

```endpoint
GET //{username}
```

#### Example request

```javascript

axios.get('https://pyschographic-analysis-of-text.herokuapp.com/api/users/austen')
  .then(res => console.log(response))
  .catch(err => console.log(err));
```

#### Example response

```json
{
  "word_count": 3068,
  "personality": {
    "openness": 0.7689681223330022,
    "conscientiousness": 0.6116285556421867,
    "extraversion": 0.5133966275759498,
    "agreeableness": 0.6907153985547558,
    "emotional": 0.479429737477851
  },
  "needs": {
    "challenge": 0.7407364415164231,
    "closeness": 0.7112767663555342,
    "curiosity": 0.8165124935156454,
    "excitement": 0.6034083412208464,
    "harmony": 0.7509031022294592,
    "ideal": 0.6689251805479058,
    "liberty": 0.7053233647579571,
    "love": 0.6946115083781559,
    "practicality": 0.7151624837520636,
    "self_expression": 0.6162314345864838,
    "stability": 0.6865163758032521,
    "structure": 0.6994832225455392
  },
  "values": {
    "conservation": 0.5797906140558703,
    "openness": 0.7802621121192117,
    "hedonism": 0.6651931562325292,
    "self_enhancement": 0.6903607818259612,
    "self_transcendence": 0.8202503138343755
  }
}
```

### Create wobble

Creates a new, empty wobble.

```endpoint
POST /wobbles/v1/{username}
```

#### Example request

```curl
curl -X POST https://wobble.biz/wobbles/v1/{username}
```

```bash
$ wbl wobbles create
```

```javascript
client.createWobble({
  name: 'example',
  description: 'An example wobble'
}, function(err, wobble) {
  console.log(wobble);
});
```

```python
response = wobbles.create(
  name='example', description='An example wobble')
```

#### Example request body

```json
{
  "name": "foo",
  "description": "bar"
}
```

| | Property           | Description                            |                            |
| ----------| -------------  | ---- -------------------------------------- |------------------------------- |
| | `name`               | (optional) the name of the wobble      |      |
| | `description` | (optional) a description of the wobble | |

#### Example response

```json
{
  "owner": "{username}",
  "id": "{wobble_id}",
  "name": null,
  "description": null,
  "created": "{timestamp}",
  "modified": "{timestamp}"
}
```

### Retrieve a wobble

Returns a single wobble.

```endpoint
GET /wobbles/v1/{username}/{wobble_id}
```

Retrieve information about an existing wobble.

#### Example request

```curl
curl https://wobble.biz/wobbles/v1/{username}/{wobble_id}
```

```bash
$ wbl wobble read-wobble wobble-id
```

```python
attrs = wobbles.read_wobble(wobble_id).json()
```

```javascript
client.readWobble('wobble-id',
  function(err, wobble) {
    console.log(wobble);
  });
```

#### Example response

```json
{
  "owner": "{username}",
  "id": "{wobble_id}",
  "created": "{timestamp}",
  "modified": "{timestamp}"
}
```

### Update a wobble

Updates the properties of a particular wobble.

```endpoint
PATCH /wobbles/v1/{username}/{wobble_id}
```

#### Example request

```curl
curl --request PATCH https://wobble.biz/wobbles/v1/{username}/{wobble_id} \
  -d @data.json
```

```python
resp = wobbles.update_wobble(
  wobble_id,
  name='updated example',
  description='An updated example wobble'
  ).json()
```

```bash
$ wbl wobble update-wobble wobble-id
```

```javascript
var options = { name: 'foo' };
client.updateWobble('wobble-id', options, function(err, wobble) {
  console.log(wobble);
});
```

#### Example request body

```json
{
  "name": "foo",
  "description": "bar"
}
```

Property | Description
---|---
`name` | (optional) the name of the wobble
`description` | (optional) a description of the wobble

#### Example response

```json
{
  "owner": "{username}",
  "id": "{wobble_id}",
  "name": "foo",
  "description": "bar",
  "created": "{timestamp}",
  "modified": "{timestamp}"
}
```

### Delete a wobble

Deletes a wobble, including all wibbles it contains.

```endpoint
DELETE /wobbles/v1/{username}/{wobble_id}
```

#### Example request

```curl
curl -X DELETE https://wobble.biz/wobbles/v1/{username}/{wobble_id}
```

```bash
$ wbl wobble delete-wobble wobble-id
```

```python
resp = wobbles.delete_wobble(wobble_id)
```

```javascript
client.deleteWobble('wobble-id', function(err) {
  if (!err) console.log('deleted!');
});
```

#### Example response

> HTTP 204

### List wibbles

List all the wibbles in a wobble. The response body will be a
WobbleCollection.

```endpoint
GET /wobbles/v1/{username}/{wobble_id}/wibbles
```

#### Example request

```curl
curl https://wobble.biz/wobbles/v1/{username}/{wobble_id}/wibbles
```

```bash
$ wbl wobble list-wibbles wobble-id
```

```python
collection = wobbles.list_wibbles(wobble_id).json()
```

```javascript
client.listWobbles('wobble-id', {}, function(err, collection) {
  console.log(collection);
});
```

#### Example response

```json
{
  "type": "Wobble",
  "wibbles": [
    {
      "id": "{wibble_id}",
      "type": "Wobble",
      "properties": {
        "prop0": "value0"
      }
    },
    {
      "id": "{wibble_id}",
      "type": "Wobble",
      "properties": {
        "prop0": "value0"
      }
    }
  ]
}
```

### Insert or update a wibble

Inserts or updates a wibble in a wobble. If there's already a wibble
with the given ID in the wobble, it will be replaced. If there isn't
a wibble with that ID, a new wibble is created.

```endpoint
PUT /wobbles/v1/{username}/{wobble_id}/wibbles/{wibble_id}
```

#### Example request

```curl
curl https://wobble.biz/wobbles/v1/{username}/{wobble_id}/wibbles/{wibble_id} \
  -X PUT \
  -d @file.geojson
```

```bash
$ wbl wobble put-wibble wobble-id wibble-id 'geojson-wibble'
```

```javascript
var wibble = {
  "type": "Wobble",
  "properties": { "name": "Null Island" }
};
client.insertWobble(wibble, 'wobble-id', function(err, wibble) {
  console.log(wibble);
});
```

#### Example request body

```json
{
  "id": "{wibble_id}",
  "type": "Wobble",
  "properties": {
    "prop0": "value0"
  }
}
```

| Property | Description                                |
| -------- | ------------------------------------------ |
| `id`     | the id of an existing wibble in the wobble |

#### Example response

```json
{
  "id": "{wibble_id}",
  "type": "Wobble",
  "properties": {
    "prop0": "value0"
  }
}
```

### Retrieve a wibble

Retrieves a wibble in a wobble.

```endpoint
GET /wobbles/v1/{username}/{wobble_id}/wibbles/{wibble_id}
```

#### Example request

```curl
curl https://wobble.biz/wobbles/v1/{username}/{wobble_id}/wibbles/{wibble_id}
```

```bash
$ wbl wobble read-wibble wobble-id wibble-id
```

```javascript
client.readWobble('wibble-id', 'wobble-id',
  function(err, wibble) {
    console.log(wibble);
  });
```

```python
wibble = wobbles.read_wibble(wobble_id, '2').json()
```

#### Example response

```json
{
  "id": "{wibble_id}",
  "type": "Wobble",
  "properties": {
    "prop0": "value0"
  }
}
```

### Delete a wibble

Removes a wibble from a wobble.

```endpoint
DELETE /wobbles/v1/{username}/{wobble_id}/wibbles/{wibble_id}
```

#### Example request

```javascript
client.deleteWobble('wibble-id', 'wobble-id', function(err, wibble) {
  if (!err) console.log('deleted!');
});
```

```curl
curl -X DELETE https://wobble.biz/wobbles/v1/{username}/{wobble_id}/wibbles/{wibble_id}
```

```python
resp = wobbles.delete_wibble(wobble_id, wibble_id)
```

```bash
$ wbl wobble delete-wibble wobble-id wibble-id
```

#### Example response

> HTTP 204