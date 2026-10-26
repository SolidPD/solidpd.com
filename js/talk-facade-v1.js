// talk-facade-v1.js: a click-to-play poster for the Closing the Loop talk on agentic.html.
// The poster is a plain link to the video on YouTube, so it works without this script. With the script,
// a click swaps the poster for the youtube-nocookie player and starts it. The page loads nothing from
// YouTube until a visitor asks to play, and the play button sits on the poster's loop diagram instead of
// YouTube's centred button, which covers the subtitle.
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.talk-facade[data-embed]').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const frame = document.createElement('iframe');
      frame.src = link.getAttribute('data-embed');
      frame.title = link.getAttribute('data-title') || 'Video';
      frame.width = '1280';
      frame.height = '720';
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      frame.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share';
      frame.allowFullscreen = true;
      link.replaceWith(frame);
      frame.focus();
    });
  });
});
