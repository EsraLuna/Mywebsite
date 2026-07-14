// Typing effect for role line
  const roles = [
    "IT Support Specialist",
    "Network Technician",
    "Content Creator",
    "Digital Marketer",
    "Graphic Designer"
  ];
  const el = document.getElementById('roleType');
  let ri = 0, ci = 0, deleting = false;

  function tick(){
    const current = roles[ri];
    if(!deleting){
      ci++;
      if(ci > current.length){ deleting = true; setTimeout(tick, 1200); return; }
    } else {
      ci--;
      if(ci < 0){ deleting = false; ri = (ri+1) % roles.length; ci = 0; }
    }
    el.innerHTML = current.slice(0, ci) + '<span class="cursor"></span>';
    setTimeout(tick, deleting ? 40 : 75);
  }
  tick();

  // Project tab switch
  function showSet(name){
    document.querySelectorAll('.proj-tab').forEach(b => b.classList.toggle('active', b.dataset.set === name));
    document.querySelectorAll('.proj-set').forEach(s => s.classList.toggle('active', s.dataset.set === name));
  }
