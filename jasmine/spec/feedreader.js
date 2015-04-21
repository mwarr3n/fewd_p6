/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* All tests are included within the $() function,
 * since some of these tests may require DOM elements. 
 * This will ensure they don't run until the DOM is ready.
 */
$(function() {
   /**
    * Test suite: RSS Feeds
    */
    describe('RSS Feeds', function() {
        /**
         * Test to make sure that the allFeeds variable has been 
         * defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /** 
         * Test that loops through each feed in the allFeeds object 
         * and ensures it has a URL defined and that the URL is not empty.
         */
        it('have a defined url that is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /**
         *  Test that loops through each feed in the allFeeds object and 
         *  ensures it has a name defined and that the name is not empty.
         */
         it('have a defined name that is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    /**
     * Test suite: The Menu
     */
    describe('The menu', function() {
        /** 
         * Test that ensures the menu element is hidden by default. 
         */
        it('is hidden by default', function() {
           expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /**
        * Test that ensures the menu changes visibility when the menu icon is clicked.
        */
        it('visibility changes when the menu icon is clicked', function() {
            $('a.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('a.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


        /**
         * Extra Test to make sure the menu contains links
         */
        it('contains links', function() {
            expect($('.feed-list').children().length).toBeGreaterThan(0);
        });
    });

    /**
     * Test suite: Initial Entries
     */
    describe('Initial Entries', function() {
        /**
         * Test that ensures when the loadFeed function is called and completes its work, 
         * there is at least a single .entry element within the .feed container.
         */
        beforeEach(function(done){
            loadFeed(0,done);
        });

        it('are loaded with at least on item', function() {
            expect($('.feed').length).toBeGreaterThan(0);
        });
    });

    /**
     * Test suite: New Feed Selection
     */
    describe('New Feed Selection', function() {

        /**
         * Test that ensures when a new feed is loaded by the loadFeed 
         * function that the content actually changes.
         */
        
        beforeEach(function(done) {
            loadFeed(0, function(done){
                firstFeed = $(".feed").html();
            });

            loadFeed(1, done);
        });

        it('feed content changes', function() {
            secondFeed = $(".feed").html();
            expect(secondFeed).not.toBe(firstFeed);
        });
    });
    
}());
