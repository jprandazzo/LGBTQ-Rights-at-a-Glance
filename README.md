# LGBTQ-Rights-at-a-Glance

The purpose of this project is to showcase the status of LGBTQ+ rights across the US, easily sliced either by issue (showing all states), or by state (showing all issues in that state).
The functionality is straightforward and the data (coming from the Human Rights Campaign) is insightful. The background image shows queer culture trailblazers Marsha P. Johnson and Sylvia Rivera at the Stonewall Riots, a poignant reminder that to progress forward, we have to remember where we come from and those whose passion and sacrifices got us this far.

<img width="1792" alt="Screenshot 2023-07-06 at 9 11 14 AM" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/72ddc30d-ee52-41ab-a4cb-a90bd2c52797">


## Key Functionality

There is a list of 11 issues (red arrow), which highlights states in a color-coded system when clicked 
(2 shades of green, depending on label of favorability, if sentiment is positive toward the LGBTQ+ community, grey if no data, or red if negative.

<img width="1612" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/e1a23932-6035-4fa3-85bc-14921a978fc7">

One can also click any state on the map (blue arrow) to show the scores for all 11 topics in that state, 

<img width="1654" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/3f455337-91d7-4bf7-971f-3a8df2d3300d">

On `hover`, each of the bars in the bar chart has a tooltip with the state's policy on that issue.

<img width="678" alt="Screenshot 2023-07-06 at 2 23 11 PM" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/e83c9473-c4a7-42b3-ad1d-ef8d04ef88f4">


and finally, when any item is selected, the Clear button (green arrow) becomes active and one can click it to clear the screen and start over.


## Technical details

### Fetch/Graph
All data in the list, map, and chart are populated *dynamically* using the results of an API fetch to the HRC: https://hrc-lgbtq-2020.herokuapp.com/api.
This is important because if the database were to change, outside of styling (if the list of issues were to add more items), no work would be required on this page to update the charts.

<img width="660" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/2606bfa4-d48a-496c-ad29-319765eae761">

The fetch is therefore used to: populate the unordered list of issues,

<img width="869" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/f1522564-a6a9-433d-9bc8-d032762603b7">

parse out the score for each attribute and assign them as data attributes to each state's path tag in the map,

<img width="1086" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/ab7b068a-3c0a-4d00-8ab9-ad6c8f007e6c">

and finally, assign a color (`SetColor`) to each state (path) depending on the value returned.

<img width="335" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/27747142-7924-4869-935c-05d9089937ac">

Each state's path tag receives an `EventListener` which, upon `click`, fetches the scores on all issues for that specific state,

<img width="515" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/4c0e5b3c-1c6a-40b7-93fa-998cecdd6109">

which is used to generate a bar chart whose values are filled in and color set based on each score:

<img width="490" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/777406ae-7947-480d-bf08-86b1d72c59e0">

### Button - Clear Selection

#### Functionality
<img width="659" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/6f966ee2-7d38-4131-95f8-c52b7890367e">
The Button class has three functions defined on it: `greyOut`, `setActive`, and `handleClick`. `handleClick` takes the list of issues and changes the `display`
attribute from `none` to `block`, hides the bar chart (`display: none`), iterates through all `path` elements to `fill` each with its default color `#f9f9f9`, and 
finally greys itself out.

#### Styling
The Clear Selection button has two states, greyed out (when nothing is selected), and normal (when either a state or an issue is selected),
with different coloring and opacity to reflect the two states.

<img width="293" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/bbbf10c9-8a54-4d32-97e4-a5d1f090be41"> <img width="286" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/43c1e44a-2410-4662-8116-d68272d715c0">


The hover action is different depending on the state of the button - when greyed out it forces `default` instead of allowing it to become `text`
automatically, and when active, it turns the cursor to `pointer` and dims the brightness to make it look like a real button.

<img width="230" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/ae542e05-8d25-4d4a-acc6-45fe79f20f03">

### Other key styling
Careful attention was paid to color, size, borders, padding, and margin to each element on the page in order to make the page look as dynamic
and professional as possible:

<img width="466" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/6b0c875a-2f9f-477c-8d6b-ea7de7890bf1">

Each `path` on hover was directed to turn the cursor to `pointer`, to dim its `brightness` to .8, add a `drop-shadow` filter, and `transform` (enlarge) the path slightly to make it 
appear to "pop" out of the screen, as an attention-grabbing clickable button should.

<img width="461" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/c7c4d7c2-7e27-404f-8d84-8a3d26b7cc44">

All text is given a custom text-shadow depending on its location/color/context, in order to make the page look less sterile and instead warm and comfortable.

<img width="329" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/f1b4c262-0bfd-4148-8b89-35f0c64dc10c">

<img width="305" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/b9789976-1a7c-4a7a-9c73-9355954816d4">

<img width="322" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/fda1cb40-4888-4311-a66a-825b00aec86c">



## Future Roadmap
### Legend
The primary improvement is a legend that shows all colors and their respective score bands to make it immediately obvious to the user what any color means.

### Keep selected item filtered, Zoom in on states when clicked
Another key feature release would be to keep a selected item lit up so the user always knows what their most recent selection has been (i.e. what issue currently
corresponds to the colors seen on the map). Further, to achieve optimal UI, upon clicking on a state, the map should zoom in on that state and grey out/hide all others.

### Resources/News
While this data is a good first glimpse, anyone using this for actual activism purposes should be linked to external resources - local NGOs, local government and
other leaders to contact, resources to contact if the person is in-need or their safety (physical or mental) is at-risk. Data should be not just informative, but 
easily *actionable*.





