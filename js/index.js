$(function(){
    $('#userSignInput').on('keyup', function() {
        var numChars = $(this).val().length;
        $('#tiles').text(numChars);
        updatePrice(numChars);
    });
    
    $('.checkboxes').on('click', function(e) {
        var fontUpgrade = $('#userFont').is(':checked');
        var colorUpgrade = $('#userColor').is(':checked');
        updatePrice( $('#userSignInput').val().length, fontUpgrade, colorUpgrade);
    });
    
    $('#confirmOrder').on('click', function() {
        event.preventDefault();
        
        var previewMsg = $('#userSignInput').val();
        
        if ($('#userSignInput').val().length > 0) {
            $('#message').html(previewMsg);
        }
    
        $('#previewScreen').toggle();
        $('#previewScreen').animate({ 'right': '0px' }, 250);
    });
    
    $('#cancelPreview').on('click', function() {
        event.preventDefault();
        $('#previewScreen').toggle();
    });
    
    $('#finalConfirm').on('click', function() {
        event.preventDefault();
        $('#previewScreen').toggle();
        if ($('#userSignInput').val() < 1) {
            window.alert('Cannot order an empty sign!');
        } else {
            window.alert('Order has been confirmed!');
        }
    });
});

function updatePrice(signLength, fontUpgrade, colorUpgrade) {
    var costPerTile = 5;
    
    if (fontUpgrade && colorUpgrade) {costPerTile = 7;}
    else {
        if (fontUpgrade || colorUpgrade) {costPerTile = 6;}
        else {costPerTile = 5;}
    }
    
    var subTotal = signLength * costPerTile;
    var shipping = 7;
    if(signLength <= 0) {shipping = 0;}
    var grandTotal = subTotal + shipping;
    
    $('#subTotal').text('$'+ subTotal);
    $('#shipping').text('$'+ shipping);
    $('#grandTotal').text('$'+ grandTotal);
    
    return grandTotal;
}