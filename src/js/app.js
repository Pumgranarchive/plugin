class Plugin{
 

    /**
     * Constructor
     *
     */   
    constructor(){
        this.$overlay = 'Website_overlay';
        this.$plugin = 'Pumgrana';
        this.width = 400;
        this.isActive = false;
        this.isBuilt = false;
        this.dispatcher();
        this.getData();
    }




    /**
     * Dispatcher
     *
     */  
    dispatcher(){


    }



    /**
     * Build
     *
     * @with sprintjs
     */  
    build(){
        Sprint('body').prepend(`<div class="${this.$overlay}"></div>`);
        Sprint('body').append(`
            <div class="${this.$plugin}">
                <div class="Pumgrana_content">
                    <a role="button" class="Toogle" aria-label="Ouvrir"></a>
                    <div class="Header">
                        <a aria-label="Go back" href="#/" class="Header_back"></a>
                        <span class="Header_url">source.com</span>
                        <span class="Header_title">Breast Bancer Treatment & Management</span>
                        <svg class="Header_bookmark -active" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg">
                            <title>View all your bookmarks</title>
                            <path d="M3.437 1h8.126L14 3.45V19l-4.063-3.273L5.875 19V3.45L3.437 1 1 3.45V9.18h4.875" stroke="#DCDCDC" fill="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd"/>
                        </svg>
                    </div>
                    <div class="Resultats">
                        <h1 class="Resultats_title">
                            Related contents
                        </h1>
                        <input type="text" name="search" placeholder="Search ..." class="Search">
                        <a href="#" class="Item">
                            <svg class="Item_bookmark -active" width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg">
                                <title>View all your bookmarks</title>
                                <path d="M3.437 1h8.126L14 3.45V19l-4.063-3.273L5.875 19V3.45L3.437 1 1 3.45V9.18h4.875" stroke="#DCDCDC" fill="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd"/>
                            </svg>
                            <span class="Item_url">source.com</span>
                            <h2 class="Item_title">Content 4 facilis num dipit, quat nim niate facilis</h2>
                            <p class="Item_description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit ...
                            </p>
                            <span class="Item_tag">Tag 1</span>
                            <span class="Item_tag">Tag 2</span>
                            <span class="Item_tag">Tag 3</span>
                        </a> 
                    </div>
                    <div class="Footer">
                        <a class="Footer_viewBookmarks -active" href="#/pumpgrana/all" title="View all your bookmarks">
                            <svg width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg">
                                <title>View all your bookmarks</title>
                                <path d="M3.437 1h8.126L14 3.45V19l-4.063-3.273L5.875 19V3.45L3.437 1 1 3.45V9.18h4.875" stroke="#D2D2D2" fill="#EBEBEB" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd"/>
                            </svg>
                        </a>
                        <a class="Footer_website" href="#/pumgrana/website" title="Aller sur Pumgrana"></a>
                    </div>
                </div>
            </div>
        `);
    }




    /**
     * Toogle
     *
     * @with velocity and sprint
     */ 
    toogle(origin = null){

        if(origin == 'chromebar'){
            if(!this.isBuilt){
                this.build();
                this.isBuilt = true;
            }   
            else{
                this.hide();
            }
        }


        if(!this.isActive){
            Sprint('body, html').addClass('-pugmrana-active');
            Sprint(`.${this.$overlay}`).addClass('-is-active');
            Velocity(Sprint(`.${this.$overlay}`).dom, {
                opacity: 1
            }, {
                delay: 100,
                duration: 300
            });
            Velocity(Sprint(`.${this.$plugin}`).dom, {
                translateX: `${-1 * this.width}px`
            }, {
                delay: 200,
                duration: 300
            });
            this.isActive = true;
        }
        else{
            Velocity(Sprint(`.${this.$plugin}`).dom, {
                translateX: 0
            }, {
                delay: 200,
                duration: 300
            });
            Velocity(Sprint(`.${this.$overlay}`).dom, {
                opacity: 0
            }, {
                delay: 100,
                duration: 300,
                complete: () => {
                Sprint(`.${this.$overlay}`).addClass('-is-active');
                    Sprint('body, html').removeClass('-pugmrana-active');
                    Sprint(`.${this.$overlay}`).removeClass('-is-active');
                }
            });
            this.isActive = false;
        }

    }




    /**
     * Hide
     *
     */ 
    hide(){
        Sprint(`.${this.plugin}`).addClass('.is-hidden');
    }




    /**
     * Get data 
     *
     */ 
    getData(){
        console.log(Pumgrana.API.GetLinksFromContent(window.location));
    }


}
 
var PumgranaPlugin = new Plugin();
