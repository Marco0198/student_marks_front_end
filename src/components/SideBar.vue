<template>
<div>

       <div>
  <b-navbar toggleable="lg" align="center" type="dark" style=" background:black" >
    <b-navbar-brand href="#">Student Marks</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-2">
        <b-nav-item to="/" >Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/student">Students</b-nav-item>
        <b-nav-item to="/grades">Grades</b-nav-item>
        <b-nav-item to="/papers">Papers</b-nav-item>
        <b-nav-item to="results">Results</b-nav-item>
        <b-nav-item to="examinations">Examinations</b-nav-item>
        <b-nav-item to="/marks" >Marks</b-nav-item>  
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <div>
</div>

</div>
        </div>

</template>

<script>
export default {

}
</script>

<style>


main {
    display: flex;
    flex-wrap: nowrap;
    height: 100vh;
    height: -webkit-fill-available;
    max-height: 100vh;
    overflow-x: auto;
    overflow-y: hidden;
}

.b-example-divider {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}
</style>
