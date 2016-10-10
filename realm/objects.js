export default class RealmObjects {}
RealmObjects.MemorySchema = {
  name: 'Memory',
  properties: {
    description: 'string',
    coords: {type: 'list', objectType: 'Coordinate'},
  }
}

RealmObjects.CoordinateSchema = {
  name: 'Coordinate',
  properties: {
    longitude: 'double',
    latitude: 'double',
    timeStamp: 'double'
  }
}

RealmObjects.saveMemory = function(coordinates, description) {
  console.log('---------------realm write-------------')
  // console.log(description)
  // console.log(coordinates)
    realm.write(() => {
      let memory = realm.create('Memory', {
        description: description,
        id: 1
      });
      let coordList = memory.coords
      for (var i = 0; i < coordinates.length; i++) {
        // console.log(i)
              // console.log(coordinates[i].timeStamp)

        coordList.push({longitude: coordinates[i].longitude,
          latitude: coordinates[i].latitude,
         timeStamp: coordinates[i].timeStamp});
        // console.log(memory.coords[i].timeStamp)
      }

    });
}

RealmObjects.countMemories = function() {
  // console.log(realm.objects('Memory'));
  return realm.objects('Memory');
}

import Realm from 'realm';
let realm = new Realm({schema: [RealmObjects.MemorySchema, RealmObjects.CoordinateSchema]});
