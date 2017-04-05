function ContentfulModel() {
  let client;
  const spaceId = '8nmbnmef5jq7';
  const apiKey = {
    contentDelivery: '2b0af88ae087bef7c88668c9a00cd778656e22d726598b797a246415c9176eaf'
  };
  const model = {
    contentTypes: {},
    entries: [],
    getEntries
  };

  function createClient() {
    return contentful.createClient({
      space: spaceId,
      accessToken: apiKey.contentDelivery
    });
  }

  function getEntries() {
    const config = {
      content_type: 'cv',
      include: 2
    };

    return client.getEntries(config).then(
      entries => model.entries = entries.items,
      errorResponse => {
        console.warn('ContentfulModel: could not retrieve entries:', errorResponse);
      }
    );
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
