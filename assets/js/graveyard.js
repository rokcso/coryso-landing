document.addEventListener('DOMContentLoaded', async () => {
    const grid = document.querySelector('.graveyard-grid');
    if (!grid) return;

    try {
        const response = await fetch('assets/data/graveyard.json');
        const data = await response.json();

        // Sort by end date (newest first)
        const projects = data.projects.sort((a, b) => {
            return new Date(b.end_date) - new Date(a.end_date);
        });

        if (projects.length === 0) {
            grid.innerHTML = '<p>The graves are empty. Long may it stay so.</p>';
            return;
        }

        projects.forEach(project => {
            const card = createTombstoneCard(project);
            grid.appendChild(card);
        });
    } catch (error) {
        grid.innerHTML = '<p>The graves are silent today.</p>';
    }

    // Set copyright year
    const copyrightEl = document.getElementById('copyright');
    if (copyrightEl) {
        copyrightEl.textContent = `© ${new Date().getFullYear()} Coryso Studio. All rights reserved.`;
    }
});

function createTombstoneCard(project) {
    const article = document.createElement('article');
    article.className = 'tombstone-card';

    const lifespan = formatLifespan(project.start_date, project.end_date);
    const epitaph = project.epitaph ? `<p class="tombstone-epitaph">${escapeHtml(project.epitaph)}</p>` : '';
    const archiveLink = project.link ? `<p class="tombstone-archive"><a href="${project.link}" target="_blank" rel="noopener">View archive ↗</a></p>` : '';

    // Use custom icon image if available, otherwise show R.I.P. text
    const iconHtml = project.icon_img
        ? `<span class="tombstone-icon"><img src="${project.icon_img}" alt=""></span>`
        : `<span class="rip-icon">R.I.P.</span>`;

    article.innerHTML = `
        <div class="tombstone-header">
            ${iconHtml}
            <div class="tombstone-content">
                <h3 class="tombstone-name">${escapeHtml(project.name)}</h3>
                <p class="tombstone-lifespan">${lifespan}</p>
            </div>
        </div>
        <p class="tombstone-description">${escapeHtml(project.description)}</p>
        ${epitaph}
        ${archiveLink}
    `;

    return article;
}

function formatLifespan(start, end) {
    return `${start} — ${end}`;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
