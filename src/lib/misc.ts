export function validatestring(repo) {
    return repo.toLowerCase().replace(/ /g, '_');
  }