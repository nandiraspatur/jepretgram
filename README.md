# JEPRETGRAM APP

Simple Web Social media to share your picture, and you can give like/dislike to other posted picture

### How to use:

 * Clone Repo to your local
 * run ``npm install`` in ``server`` folder
 * run ``npm run dev`` in ``client`` folder to run dev mode


### API Route
|	Description	| Route	| Method |
|---------------|-------|--------|
| Post Photo | ``http://localhost:3000/photos`` | POST |
| Get All Photos | ``http://localhost:3000/photos`` | GET |
| Edit Captions | ``http://localhost:3000/photos/:id`` | PUT |
| Delete Photo | ``http://localhost:3000/photos/:id`` | DELETE |