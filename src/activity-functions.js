export function prefix(location, ...prefixes) {
    return prefixes.some(
      prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
    );
  }
  

  
  export function home(location) {
    return prefix(location, 'home');
  }
  
  export function about(location) {
    return prefix(location, 'about');
  }

  export function login() {
    return true;
  }