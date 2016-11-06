import fetch from 'request-promise-native';
import { parseString as parseXmlString } from 'xml2js';

const catUri = 'http://thecatapi.com/api/images/get?format=xml';

export const transform = catXml => new Promise((resolve, reject) => {
  parseXmlString(catXml, (error, { response }) => {
    if (error) reject(error);
    try {
      const { image } = response.data[0].images[0];
      resolve({
        _id: image[0].id[0],
        url: image[0].url[0],
      });
    } catch (e) {
      reject('format error', e);
    }
  });
});

export default () => fetch(catUri).then(catXml => transform(catXml));
