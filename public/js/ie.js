$(function() {
	var el = $('<p id="warning">');

	el.html('Hello there. If you&rsquo;re seeing this, then you must be using Internet Explorer 6, a very old, very poorly made browser. It is actually a whopping 8 years old! That&rsquo;s like a gazillion millenniums in Internet-years. So because of its age and poor quality, I can no longer make websites that support it, which is why this site might appear a little wonky. To see this website (and others) as they were meant to be seen, I&rsquo;d suggest switching to either <a href="http://www.getfirefox.com">Firefox</a> or <a href="http://www.google.com/chrome">Google Chrome</a>.')

	el.prependTo("body");
});
