(async function () {
  const container = document.querySelector('#projects .row') || document.querySelector('.projects-row');

  // Attempt fetch strategies:
  // 1) Try relative /api/projects (works when API is proxied or same origin)
  // 2) Fallback to localhost (useful for local docker-compose/port-forward)
  async function fetchProjects() {
    const candidates = [
      '/api/projects',
      'http://localhost:5000/api/projects',
      'http://backend-service:5000/api/projects' // in-cluster name (only works from inside cluster)
    ];

    for (const url of candidates) {
      try {
        const res = await fetch(url, { mode: 'cors' });
        if (!res.ok) throw new Error('Not OK ' + res.status);
        const body = await res.json();
        if (body && body.success && Array.isArray(body.data)) return body.data;
      } catch (err) {
        // continue trying next option
        // console.log('fetch failed', url, err.message);
      }
    }
    return null;
  }

  function renderProjects(projects) {
    if (!projects || projects.length === 0) {
      container.innerHTML = `<div class="col-12"><p class="text-center text-muted">No projects found.</p></div>`;
      return;
    }
    container.innerHTML = '';
    projects.forEach(p => {
      const col = document.createElement('div');
      col.className = 'col-md-4';
      col.innerHTML = `
        <div class="card glass-card shadow-lg">
          <div class="card-body">
            <h5 class="card-title">${escapeHtml(p.title)}</h5>
            <p class="card-text">${escapeHtml(p.description)}</p>
            <span class="badge ${p.status === 'Live' ? 'bg-success' : 'bg-warning text-dark'}">${escapeHtml(p.status)}</span>
          </div>
        </div>
      `;
      container.appendChild(col);
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // show loading
  if (container) container.innerHTML = `<div class="col-12 text-center py-5"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>`;

  const projects = await fetchProjects();
  renderProjects(projects);
})();
