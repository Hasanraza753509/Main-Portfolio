const projects = [
  {
    title: "LLM Backdoor Audit — Mechanistic Interpretability Pipeline",
    stack: "Python · PyTorch · Mechanistic Interpretability · PCA · K-Means · Gradio",
    points: [
      "Built a solo interpretability auditing pipeline for Cybershield to detect hidden backdoors and trojans planted inside LLMs, using GPT-2 small as the target model.",
      "Used PyTorch forward hooks to capture internal activations layer-by-layer while feeding the model both clean and trigger-laced prompts, isolating where a backdoor's influence first appears in the network. Applied PCA to reduce activation dimensionality and K-Means clustering to separate poisoned-trigger activation patterns from normal ones, surfacing anomalous clusters that flag a likely backdoor without needing access to the original training data.",
      "Packaged the pipeline as an interactive Gradio demo so a reviewer can input a prompt and see, layer by layer, whether the model's internal activations look anomalous — alongside a full GitHub repo, results PDF, and pitch script for the submission.",
    ],
  },
  {
    title: "Phishing Website Detection",
    stack: "Python · Scikit-learn · Pandas · URL Feature Extraction · Random Forest · SVM",
    points: [
      "Built an end-to-end ML pipeline that extracts 30+ structural, lexical, and domain-based features from URLs — including subdomain depth, special character ratios, HTTPS usage, and domain age — to classify malicious phishing sites with high precision and recall.",
      "Compared Random Forest and SVM classifiers on the extracted feature set, tuning for the model that best balanced false positives against detection recall for real-world deployment.",
    ],
  },
  {
    title: "AI Code Review Assistant",
    stack: "JavaScript · Node.js · GitHub API · GitLab API · AI Integration · Webhooks",
    points: [
      "Developed an AI-powered pull request review bot that integrates with GitHub and GitLab via webhooks, automatically analysing code diffs and posting inline review comments identifying bugs, security vulnerabilities, and style violations in real time.",
      "Implemented context-aware analysis that understands code intent across multiple files in a PR, reducing review turnaround time and surfacing issues that static linters miss, such as logic errors and insecure API usage patterns.",
    ],
  },
  {
    title: "Automated AI Model Compression",
    stack: "Python · TensorFlow · Pruning · Post-Training Quantization · Edge Deployment",
    points: [
      "Built an automated compression pipeline applying magnitude-based weight pruning and post-training integer quantization to reduce model size by up to 75% and inference latency by over 60%, with minimal accuracy degradation.",
      "Benchmarked compressed models against their full-precision counterparts to validate accuracy trade-offs before edge deployment.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[auto_1fr] gap-10 md:gap-16">
        <div className="md:[writing-mode:vertical-rl] rflex md:items-center">
          <h2 className="font-serif text-4xl text-ink leading-tight"><b>
            Industry Projects &amp; Other Works
          </b>
          </h2>
        </div>




        <div className="space-y-12">
          {projects.map((p, i) => (
            <div key={p.title}>
              {i !== 0 && <hr className="border-ink/20 mb-12" />}
              <h3 className="font-body font-bold text-xl text-ink">
                {p.title}
              </h3>
              <p className="font-body text-sm text-ink/50 mt-1 mb-4">
                {p.stack}
              </p>
              <div className="space-y-3">
                {p.points.map((pt, idx) => (
                  <p key={idx} className="font-serif text-ink/80 leading-relaxed">
                    {pt}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
