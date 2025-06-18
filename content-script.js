chrome.storage.local.get(['enabled'], function (result) {
  if (result.enabled !== false) {
    const disableInboxLinks = () => {
      // New Reddit
      const newLink = document.getElementById('notifications-inbox-button');
      if (newLink) {
        newLink.removeAttribute('href');
        newLink.style.pointerEvents = 'none';
        newLink.style.opacity = '0.5';
        console.log('🔒 Disabled notifications-inbox-button on new Reddit');
      }

      // Old Reddit
      const oldLinks = document.querySelectorAll(
        'a[href^="https://old.reddit.com/message/inbox"]'
      );
      oldLinks.forEach((link) => {
        link.removeAttribute('href');
        link.style.pointerEvents = 'none';
        link.style.opacity = '0.5';
        console.log('🔒 Disabled inbox link on old Reddit');
      });
    };

    // Run once immediately
    disableInboxLinks();

    // Keep watching for dynamic changes
    const observer = new MutationObserver(disableInboxLinks);
    observer.observe(document.body, { childList: true, subtree: true });
  }
});
