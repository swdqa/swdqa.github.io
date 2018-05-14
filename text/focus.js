var Focus = Class.create({
	initialize:function(){
			    this.initialized=false;
			    Event.observe(window, 'load', this.onload.bindAsEventListener(this));					
		    },
		    onload:function(){
			    this.focusElements=$$('a','input[type="button"]');
			    //this.focusElements=$$('a','span[id="button"]');
			    this.focusedElement=0;
			    document.observe('keydown', this.onkeydown.bindAsEventListener(this));

			    if (this.focusElements.length==0){
				    //alert('keine elemente zum fokussieren gefunden');
				    return;
			    }
			    this.focusElement(0);
			    this.initialized=true;
			    
		    },
		      markElementFocused:function (element){
			$(element).addClassName("focused");
		      },

		      markElementUnfocused:function (element){
			$(element).removeClassName("focused");
		      },

		      getFocusedElement:function (){
			return this.focusElements[this.focusedElement];
		      },
		      focusElement:function (elementNumber){
			this.markElementUnfocused(this.getFocusedElement());
			if (elementNumber>=this.focusElements.length)
			  elementNumber = 0;
			if (elementNumber<0)
			  elementNumber=this.focusElements.length-1;
			this.focusedElement=elementNumber;
			this.markElementFocused(this.getFocusedElement());
		      },
		    focusNext:function(){
			    this.focusElement(this.focusedElement+1);
		    },
		    focusPrev:function(){
			    this.focusElement(this.focusedElement-1);
		    },
		    click:function(){
			    var focusedElement = this.getFocusedElement();
			    if (focusedElement.tagName=='A')	{
			    if (!((focusedElement.onclick)&&(!focusedElement.onclick())))
			      location.href=focusedElement.href;
			    }
			    else focusedElement.click();
		    }, 
		    onkeydown:function(event){
		    switch (event.keyCode || event.which) {
				    case Event.KEY_RETURN:
					    this.click();
					    Event.stop(event);
					    break;
				    case Event.KEY_DOWN:
				    case Event.KEY_RIGHT:
				    case Event.KEY_TAB:
					    this.focusNext();
					    Event.stop(event);
					    break;
				    case Event.KEY_UP:
				    case Event.KEY_LEFT:
					    this.focusPrev();
					    Event.stop(event);
					    break;
					case 56:
					case 461: // return key
						window.history.back();
						break;
					case 57:
					case 403: // red key
						window.location.reload();
						break;
				    }
		    }

		    
});

new Focus();

