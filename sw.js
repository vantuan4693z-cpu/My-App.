<script>
// Đăng ký Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js')
      .then(function(registration) {
        console.log('Service Worker đăng ký thành công:', registration.scope);
      })
      .catch(function(err) {
        console.log('Đăng ký Service Worker thất bại:', err);
      });
  });
}
</script>
