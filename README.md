# LGBTQ-Rights-at-a-Glance

The purpose of this project is to showcase the state of LGBTQ+ rights across the US, easily sliced by issue, or sliced by state.


<img width="1792" alt="Screenshot 2023-07-06 at 9 11 14 AM" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/72ddc30d-ee52-41ab-a4cb-a90bd2c52797">

There is a list of 11 issues (red arrow), which highlights states in a color-coded system when clicked 
(2 shades of green if unfavorable to the LGBTQ+ community, grey if no data, or red if unfavorable.
One can also click any state on the map (blue arrow) to show the scores for all 11 topics in that state, and finally, when any item is selected, the Clear button (green arrow) becomes
active and one can click it to clear the screen and start over.

The data is fetched from an API endpoint provided by the Human Rights Campaign, and the scores for each attribute are then added to each state's path tag in the SVG map, with a function
SetColor determining which color the states should appear based on that issue:
<img width="1086" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/ab7b068a-3c0a-4d00-8ab9-ad6c8f007e6c">

There are event listeners added to each state's path tag which fetch the state data on that specific state,
<img width="515" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/4c0e5b3c-1c6a-40b7-93fa-998cecdd6109">

and that data is used to generate a bar chart whose values are filled in based on the scores returned by that fetch:
<img width="490" alt="image" src="https://github.com/jprandazzo/LGBTQ-Rights-at-a-Glance/assets/131551196/777406ae-7947-480d-bf08-86b1d72c59e0">



