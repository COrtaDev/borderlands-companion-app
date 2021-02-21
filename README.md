# BL3 Companion App

A `Twitter` and `Borderlands 3` inspired social media platform dedicated to discussing in-game `loot drops` between users and players.

## Description:

#

Initially planned as an interactive loot table for the video game **_Borderlands 3_**, `BL3 Companion App` is a `Twitter` inspired loot tracker social media platform dedicated to discussing in-game `loot drops`.

Much like how `Twitter` enables users to compose and post `Tweets`, `BL3 Companion` enables users to compose and post `Loot Drops`; each of which pertain to a particular `loot item` from the game. Posted `Loot` will appear in the `feed` of their `followers` and the `loot drops` posted by other users they `follow` in the same way it does on `Twitter`.

Users can `like` and `comment` on other users `Loot Drops` and `follow` other users much like you can on `Twitter`.

#

## Recent Updates:

A list of recent changes and/or modifications...

#

- ### Solved an issue with images not being embedded due to COEP blockage.

  _As per MDN_:

  > **Cross-Origin-Embedder-Policy:**
  >
  > The HTTP **Cross-Origin-Embedder-Policy** (COEP) response header prevents a document from loading any cross-origin resources that don't explicitly grant the document permission (using CORP or CORS).
  >
  > ## Syntax:
  >
  > > ```http
  > > Cross-Origin-Embedder-Policy: unsafe-none | require-corp
  > > ```
  >
  > ...
  >
  > **Avoiding COEP blockage with CORS:**
  >
  > If you enable COEP using require-corp and have a cross origin resource that needs to be loaded, it needs to support CORS and you need to explicitly mark the resource as loadable from another origin to avoid blockage from COEP. For example, you can use the crossorigin attribute for this image from a third-party site:
  >
  > > ```html
  > > <img src="https://thirdparty.com/img.png" crossorigin />
  > > ```

#

- ### Added client-side data management to enable better performance.

  **`Window.sessionStorage`**; _as per MDN_:

  > The read-only **`sessionStorage`** property accesses a session `Storage` object for the current origin. `sessionStorage` is similar to `localStorage`; the difference is that while data in `localStorage` doesn't expire, data in `sessionStorage` is cleared when the page session ends.

  As it pertains to the `app`; we keep a copy of the `loot` from the `Redux` store in `sessionStorage` to optimize loading times for the `feed` thus enabling us to free up additional resources within our `SQL-Alchemy` server. After the initial download of the session from the server, our `app` focuses on delivering updates to and from the server with respect to each individual client user's state.

  Should the user refresh the page, logout and immediately log back in, or navigate away and then back to the site, the entire `app` need not be reloaded from the database. If we find a saved state within `sessionStorage`, the `app` loads from that last known state, then checks to see if additional updates are required.

  Changes made to the state of the `app` at any given time are pushed to both the `Redux` store and `sessionStorage`. This is accomplished in `React` via the `useEffect` hook to inquire whether an update is necessary. An update will be necessary if a user has:

  - Created a new `Loot Drop`,
  - Updated a previous `Loot Drop`,
  - Created a new `comment`,
  - Replied to a previous `comment`,
  - Clicked `Like` on a `Loot Drop`,
  - `Followed` another user for the first time,
  - `Unfollowed` a previous user

  Updates will be sent to and parsed by `React`, allowing the relevant components to be rendered or re-rendered as needed. The incoming updates are added to the `Redux` store and then compared to our `sessionStorage` This is done to minimize unecessary `asynchronous` `JavaSript` calls to our `sessionStorage`.

  Example case:

  > ```jsx
  > //Example use case from within our main React <App /> component.
  > const App = () => {
  >
  >   const dispatch = useDispatch();
  >   const { userId, userName, loggedOut } = useSelector((state) => state.auth);
  >   const { lootDrops, newLootAvailable } = useSelector(
  >       (state) => state.lootDrops
  >    );
  >   const lootStorage = window.sessionStorage;
  >
  >   useEffect(() => {
  >     let lootStored = lootStorage.getItem("lootStored");
  >
  >     if (JSON.parse(lootStored)) {
  >       let totalLootDrops = lootStorage.getItem("totalLootDrops");
  >       totalLootDrops = JSON.parse(totalLootDrops);
  >
  >       let loot = [];
  >       for (let i = 0; i < totalLootDrops; i++) {
  >         let lootItem = lootStorage.getItem(`lootDrop${i}`);
  >         loot.push(JSON.parse(lootItem));
  >       }
  >
  >     return dispatch({ type: LOOT_DROPS, lootDrops: loot });
  >   }
  >
  >   if (newLootAvailable) {
  >     lootStorage.setItem("newLootDropAvailable", JSON.stringify(false));
  >     return dispatch(getLootDrops(userId));
  >   }
  > }, [userId, lootDrops, dispatch, lootStorage, newLootAvailable]);
  >
  >    return (
  >     //...rest of code omitted for brevity...
  >    );
  > };
  >
  > export default App;
  > ```

#

## Additional notes:

Potential features and/or changes coming in the future...

#

## We have officially begun a major overhaul of the site!

- We are happy to announce that a major update is currently underway! We hope that these changes bring:

  1. A better user experience,
  2. Improved functionality,
  3. A more maintainable code base on the backend...

  #

  ### Planned changes (_currently under development_):

  - Complete overhaul of styling and layout using custom `Bulma` templates, allowing for better responsivness and rendering on multiple viewports.

    (ie: fullHD, standard desktop, tablets, and mobile devices.)

  - New landing page with `login`/`signup` menus.
  - Better UI for generating `loot drops`.
  - Sidenav with `<BrowserRouter />` and `route configs`.
  - The user will be able to select a new avatar from a predefined list of choices

  ### Potential changes (_not yet under development_):

  - A list of all possible `loot items` that can be found in game and references to them generated from FANDOM wikia.

#

#

- ## Saving State on `Window.closed` events.
  Allow `sessionStorage` to persist between closing and reopening the browser...
  #
  We may want to implement saving the last known state of the `app` to `localStorage` just in case the browser is closed and them immediately reopened. This will optimize cases where a user may close and reopen a within a specified range of time. If the state is beyond that specified time, cleared, or otherwise not available, the `app` will need to be loaded as normal.

#

## Technology Stack:

Flowchart diagram of the `app`'s technology stack...

#

![Tech Stack Flowchart](/docs/BL3CompanionApp.png)
