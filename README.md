# LGBTQ-Rights-at-a-Glance

The purpose of this project is to showcase the status of LGBTQ+ rights across the US, easily sliced either by issue (showing all states), or by state (showing all issues in that state).
The functionality is straightforward and the data (coming from the Human Rights Campaign) is insightful. The background image shows queer culture trailblazers Marsha P. Johnson and Sylvia Rivera at the Stonewall Riots, a poignant reminder that to progress forward, we have to remember where we come from and those whose passion and sacrifices got us this far.

<img width="1792" alt="Screenshot 2023-07-06 at 9 11 14 AM" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/72ddc30d-ee52-41ab-a4cb-a90bd2c52797">


##Key Functionality

There is a list of 11 issues (red arrow), which highlights states in a color-coded system when clicked 
(2 shades of green if favorable to the LGBTQ+ community, grey if no data, or red if unfavorable.
One can also click any state on the map (blue arrow) to show the scores for all 11 topics in that state, and finally, when any item is selected, the Clear button (green arrow) becomes
active and one can click it to clear the screen and start over.


##Technical details

###Fetch/Graph
The data is fetched from the following HRC API endpoint: https://hrc-lgbtq-2020.herokuapp.com/api,
<img width="660" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/2606bfa4-d48a-496c-ad29-319765eae761">

the scores for each attribute are then added to each state's path tag in the SVG map,
<img width="1086" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/ab7b068a-3c0a-4d00-8ab9-ad6c8f007e6c">

and finally, a function SetColor assigns a color to the state (path) depending on the value returned.
<img width="335" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/27747142-7924-4869-935c-05d9089937ac">

There are event listeners added to each state's path tag which fetch the state data on that specific state,
<img width="515" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/4c0e5b3c-1c6a-40b7-93fa-998cecdd6109">

and that data is used to generate a bar chart whose values are filled in based on the scores returned by that fetch:
<img width="490" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/777406ae-7947-480d-bf08-86b1d72c59e0">

###Button - Clear Selection
The Clear Selection button has two states, greyed out (when nothing is selected), and normal (when either a state or an issue is selected),
with different coloring and opacity to reflect the two states.

<img width="293" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/bbbf10c9-8a54-4d32-97e4-a5d1f090be41"> <img width="286" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/43c1e44a-2410-4662-8116-d68272d715c0">


The hover action is different depending on the state of the button - when greyed out it forces `default` instead of allowing it to become `text`
automatically, and when active, it turns the cursor to `pointer` and dims the brightness to make it look like a real button.
<img width="230" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/ae542e05-8d25-4d4a-acc6-45fe79f20f03">

###Other key styling
Careful attention was paid to color, size, borders, padding, and margin to each element on the page in order to make the page look as dynamic
and professional as possible:
<img width="466" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/6b0c875a-2f9f-477c-8d6b-ea7de7890bf1">

Each `path` on hover was directed to turn the cursor to `pointer`, to dim its `brightness` to .8, add a `drop-shadow` filter, and `transform` (enlarge) the path slightly to make it 
appear to "pop" out of the screen, as an attention-grabbing clickable button should.


##Future Roadmap
###Legend
The primary improvement is a legend that shows all colors and their respective score bands to make it immediately obvious to the user what any color means.

###Keep selected item filtered, Zoom in on states when clicked
Another key feature release would be to keep a selected item lit up so the user always knows what their most recent selection has been (i.e. what issue currently
corresponds to the colors seen on the map). Further, to achieve optimal UI, upon clicking on a state, the map should zoom in on that state and grey out/hide all others.

###Resources/News
While this data is a good first glimpse, anyone using this for actual activism purposes should be linked to external resources - local NGOs, local government and
other leaders to contact, resources to contact if the person is in-need or their safety (physical or mental) is at-risk. Data should be not just informative, but 
easily *actionable*.





