## Purpose

First up this is a complex project, built by myself alone and without the use of charting packages. Therefore not every tiny detail works perfectly although as my use of CoPilot increases I will be able to get through the edge cases more efficiently.

The simple explanation of purpose is as follows: a responsive site to explore performance, accessibility and developer experience using the medium of complex data-visualisations derived during earlier voluntary medical work.

More details on the purpose can be read [on the homepage of the site here](https://data-visualisation.pages.dev/)

## Screens

### Scatter graph

The Scatter graph allows for any two variables from the data to be plotted on the X and Y axes to discover possible correlations.

### Timeline

Breaks down events month by month to see which months are the most serious for several values (those which are [aggregated using these functions from the database code](https://github.com/toni-sharpe/sql-plsql-example?tab=readme-ov-file#functions))

### Interactive Gannt

Sets one element of the event, on the `y` axis over time, on the `x` axis, with the `x` axis time values displayed as bar, marked based on selectable statistical options (such as range, deviation and quantiles), grouped by a different element, on a false `z` across, broken down into groups of values. Interactive mode allows the statistical breakdown element on `y` and element defined as sub-sets on `z` to be changed.

### Interactive histogram

This page groups different elements of an event providing statistical options to define the bars. The bars are grouped in a similar way to the Gannt with the range of values on `x` and the numbers reached by the given bars on the `y` axis. The `y` axis can be changed to the statistical set of choice with depth in two false `z` axes: one being the individual bars which show `N` numbers (current maximum three, for deviation); and a second being the actual choice of bars as for each `x` grouping, `N` bars can be chosen. See the example screen-shot below for a visual example:

<img width="1680" height="846" alt="Screenshot 2025-10-14 at 22 11 27" src="https://github.com/user-attachments/assets/3dbe300d-c0ff-4552-87ff-a73704116b50" />

### Drag graphs

Designed for event elements with fixed sets of values (for example, outcomes 7, 13, 19, 29 and 31) rather than open ended numbers like the Histogram. The graphs show all possible values for an element around a centre point, the `y` axis with their distance from that point defining the number associated, the `x` axis. The graphs can be zoomed and have the outlier removed (in cases where 80% of an element's values are 19 for example the graph is clearer with this removed). Another false `z` axis is employed with the toggleable circles representing another value that applies only to the set isolated from the `x` axis values. In the example case there are two possible values shown as green and blue circles.

<img width="1676" height="917" alt="Screenshot 2025-10-14 at 22 23 01" src="https://github.com/user-attachments/assets/c67f0115-5c0e-4e3e-b0e0-5065c7393060" />

### World map

The world map is not related to the medical data, it was developed as a performance and interaction challenge later. A blank example is provided as well as a 124 year performance test example with random values and a real-world example which uses % of internet users per country dating back at least 50 years.

Each map is zoomable, scrollable N, E, W and S (by button or arrow key if focused on the map) and countries can be selected and deselected in groups. A time slider allows jumping to specific years and then arrow key movement to move backwards and forwards on the timeline while this is in focus. 

The map has purposely simplified `lat` `lng` values as exact border details are not needed, however, small islands are represented as circles to compensate for this. Labels also react given zoom level, using ISO codes and full names.

<img width="947" height="797" alt="Screenshot 2025-10-14 at 22 35 25" src="https://github.com/user-attachments/assets/93a56278-e95f-4abd-a9a4-1065ffc0b78e" />
<img width="1495" height="799" alt="image" src="https://github.com/user-attachments/assets/6c7c99d1-69c5-4813-b6c8-3d67ae2ff774" />

## Other features

The site is generally responsive, most things should fit well (I say most because as a one-person effort I can't guarantee everything) and has EN/DE translation options. Filters work on the dataset and keyboard accessibility and `aria` have been given full consideration.

## StoryBook

I love StoryBook have [deployed the site StoryBook here](https://667670df0aad8c9ddd0c7476-mwezroudql.chromatic.com/?path=/story/components-button--primary). Jumped straight in on the Button component. Note that not all the StoryBook pages work perfectly.

### Storybook AXE

Along with StoryBook the AXE accessibility extension is installed. The number of passes and fails can be seen at the bottom of the screen.

## Related repos

### Database code

The data used by the site is served as a static asset from the CDN deployment described below. That data is generated by the [SQL/PlSQL repo here](https://github.com/toni-sharpe/sql-plsql-example) where data definition, hydration, calculated updates and distilled values are used to create a complete picture of an event and ensure all fields are present to make this visualisation frontend function correctly.

### CDN caching

As part of the performance enhancements key to this repo I moved the data to a different URL, using a separate CloudFlare deployment and allowing caching of large, static assets such as the [data calculated in the SQL](https://github.com/toni-sharpe/sql-plsql-example) or the [co-ordinates for the world map](https://github.com/toni-sharpe/data-visualisation--cdn/blob/main/WorldBorderList.min.json).

The [caching repo can be viewed here](https://github.com/toni-sharpe/data-visualisation--cdn). Technically it isn't a CDN as there's only one node, but that could be duplicated and served from the nearest edge to the user.

### Python backend

## CoPilot

Was used against a now deleted repository. I was curious to know what it would suggest given the code and the context of the data representing a real-world medical problem. It got very close then published things as a PR that broke the ethical code I have imposed on the data, therefore the repo has been removed and replaced with this one.
