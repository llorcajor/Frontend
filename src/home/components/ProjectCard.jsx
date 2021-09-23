import React, {useState} from "react";

function ProjectCard(props) {

    return (
        <div class="wrapper">
    <div class="clash-card it">
      <div class="clash-card__image clash-card__image--it">
        <img src={props.image} alt="barbarian" />
      </div>
      <div class="clash-card__level clash-card__level--it">{props.user}</div>
      <div class="clash-card__unit-name">{props.name}</div>
      <div class="clash-card__unit-description">
        {props.description}
      </div>

      <div class="clash-card__unit-stats clash-card__unit-stats--it clearfix">
        <div class="one-third">
          <div class="stat">{props.experience}</div>
          <div class="stat-value">Experiencia</div>
        </div>

        <div class="one-third">
          <div class="stat">{props.months}<sup>Meses</sup></div>
          <div class="stat-value">Duración</div>
        </div>

        <div class="one-third no-border">
          <div class="stat">{props.wanted}</div>
          <div class="stat-value">Se busca</div>
        </div>

      </div>

    </div> 
  </div> 
    )
}

export default ProjectCard;