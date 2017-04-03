/* global contentful */

function ContentfulModel() {
  let client;
  const spaceId = '8nmbnmef5jq7';
  const apiKey = {
    contentDelivery: '2b0af88ae087bef7c88668c9a00cd778656e22d726598b797a246415c9176eaf'
  };
  const model = {
    contentTypes: {},
    entries: [],
    getEntries: () => getEntries(),
    getOverview: () => getEntriesByType('overview'),
    getWorkHistory: () => getEntriesByType('workHistory').sort(sortWorkHistory)
  };

  function createClient() {
    return contentful.createClient({
      space: spaceId,
      accessToken: apiKey.contentDelivery
    });
  }

  function getEntries() {
    return client.getEntries().then(
      entries => model.entries = entries.items,
      errorResponse => {
        console.warn('ContentfulModel: could not retrieve entries:', errorResponse);
      }
    );
  }

  function getEntriesByType(contentType) {
    return model.entries
      .filter(entry => entry.sys.contentType.sys.id === contentType)
      .map(entry => entry.fields);
  }

  function sortWorkHistory(a, b) {
    return (a.startDate < b.startDate) ? 1 : -1;
  }

  function init() {
    client = createClient();
  }

  init();

  return model;
}

angular
  .module('matt-calthrop-cv')
  .factory('ContentfulModel', ContentfulModel);
