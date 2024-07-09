function getAttributes() {
  const link = document.getElementById('someId');
  const href = link.getAttribute('href');
  const hreflang = link.getAttribute('hreflang');
  const rel = link.getAttribute('rel');
  const target = link.getAttribute('target');
  const type = link.getAttribute('type');

  console.log('href:', href);
  console.log('hreflang:', hreflang);
  console.log('rel:', rel);
  console.log('target:', target);
  console.log('type:', type);
}
