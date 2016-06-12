// Search bar Event Handler
$(function(){
    var searchField = $('#query');
    var icon = $('#search-btn');
    // Focus Event Handler
    $(searchField).on('focus',function(){
        $(this).animate({
            width: '100%'
        }, 400);
        $(icon).animate({
            right: '10px'
        }, 400);
    });
    // Blur Event Handler
    $(searchField).on('blur',function(){
        if(searchField.val() === ''){
            $(searchField).animate({
                width: '45%'
            }, 400, function(){});
            $(icon).animate({
                right: '360px'
            }, 400, function(){});
        }
    });
    // Stop the search
    $('#search-form').submit(function(e){
        e.preventDefault();
    });
});
// Search Function
function search (){
    // Clear Results & buttons <div>
    $('#results').html('');    
    $('#buttons').html('');
    // Get Form Input
    q = $('#query').val();
    // Run GET Request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: 'snippet, id',
            q: q,
            type: 'video',
            key: 'AIzaSyBv-Ad6HkDI2srJ8wMOTTAosYNcqeVPD2A'},
            // Log data and get output
            function(data){
                var nextPageToken = data.nextPageToken;
                var prevPageToken = data.prevPageToken;
                // Log data
                console.log(data);
                // Loop over the array "items" from the GET request
                $.each(data.items, function(i, item){
                    // Get output from item
                    var output = getOutput(item);
                    // Post output to results
                    $('#results').append(output);
                });
                var buttons = getButtons(prevPageToken, nextPageToken);
                // Display buttons
                $('#buttons').append(buttons);
            }
    );
}
// Next Page Function
function nextPage(){
    var token = $('#next-button').data('token');
    var q = $('#next-button').data('query');
    // Clear Results & buttons <div>
    $('#results').html('');    
    $('#buttons').html('');
    // Get Form Input
    q = $('#query').val();
    // Run GET Request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: 'snippet, id',
            q: q,
            pageToken: token,
            type: 'video',
            key: 'AIzaSyBv-Ad6HkDI2srJ8wMOTTAosYNcqeVPD2A'},
            // Log data and get output
            function(data){
                var nextPageToken = data.nextPageToken;
                var prevPageToken = data.prevPageToken;
                // Log data
                console.log(data);
                // Loop over the array "items" from the GET request
                $.each(data.items, function(i, item){
                    // Get output from item
                    var output = getOutput(item);
                    // Post output to results
                    $('#results').append(output);
                });
                var buttons = getButtons(prevPageToken, nextPageToken);
                // Display buttons
                $('#buttons').append(buttons);
            }
    );
}
// Next Page Function
function prevPage(){
    var token = $('#prev-button').data('token');
    var q = $('#prev-button').data('query');
    // Clear Results & buttons <div>
    $('#results').html('');    
    $('#buttons').html('');
    // Get Form Input
    q = $('#query').val();
    // Run GET Request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: 'snippet, id',
            q: q,
            pageToken: token,
            type: 'video',
            key: 'AIzaSyBv-Ad6HkDI2srJ8wMOTTAosYNcqeVPD2A'},
        
            // Log data and get output
            function(data){
                var nextPageToken = data.nextPageToken;
                var prevPageToken = data.prevPageToken;
            
                // Log data
                console.log(data);
            
                // Loop over the array "items" from the GET request
                $.each(data.items, function(i, item){
                    // Get output from item
                    var output = getOutput(item);
                    // Post output to results
                    $('#results').append(output);
                });
                
                var buttons = getButtons(prevPageToken, nextPageToken);
                // Display buttons
                $('#buttons').append(buttons);
            }
    );
}
// Build Output
function getOutput(item){
    var videoId = item.id.videoId;
    var title = item.snippet.title;
    var description = item.snippet.description;
    var thumb = item.snippet.thumbnails.high.url;
    var channelTitle = item.snippet.channelTitle;
    var videoDate = item.snippet.publishedAt;
    var output = 
        '<li>' +
        '<div class="list-left">' +
        '<img src="'+thumb+'">' +
        '</div>' +
        '<div class="list-right">' +
        '<h3><a class="fancybox fancybox.iframe" href="http://www.youtube.com/embed/'+videoId+'">'+title+'</a></h3>' +
        '<small>By <span class="cTitle">'+channelTitle+'</span> on '+videoDate+' </small>' +
        '<p>'+description+'</p>' +
        '</div>' +
        '</li>' +
        '<div class="clearfix"></div>' +
        '';
    return output;
}
// Build the buttons
function getButtons(prevPageToken, nextPageToken){
    if(!prevPageToken){
        var btnOutput = 
            '<div class="button-container">' +
            '<button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'"' +
            'onclick="nextPage();">Next Page</button></div>';
    } else {
        var btnOutput = 
            '<div class="button-container">' +
            '<button id="prev-button" class="paging-button" data-token="'+prevPageToken+'" data-query="'+q+'"' +
            'onclick="prevPage();">Prev Page</button></div>' +
            '<button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'"' +
            'onclick="nextPage();">Next Page</button></div>';
    }
    return btnOutput; 
}