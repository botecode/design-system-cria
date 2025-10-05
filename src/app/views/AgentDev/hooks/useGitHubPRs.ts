import { useState, useEffect, useCallback } from 'react';

export interface GitHubPR {
  id: number;
  number: number;
  title: string;
  body: string;
  state: 'open' | 'closed' | 'merged';
  labels: Array<{
    name: string;
    color: string;
  }>;
  user: {
    login: string;
    avatar_url: string;
  };
  created_at: string;
  updated_at: string;
  merged_at?: string;
  closed_at?: string;
  html_url: string;
  head: {
    ref: string;
  };
  base: {
    ref: string;
  };
}

export interface GitHubPRsState {
  prs: GitHubPR[];
  mergedPRs: GitHubPR[];
  closedPRs: GitHubPR[];
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
}

// Mock GitHub API client for development
class GitHubAPIClient {
  private baseURL = 'https://api.github.com';
  private owner = 'fernandofeitosa'; // Replace with actual repo owner
  private repo = 'design-system-cria'; // Replace with actual repo name

  async fetchPRs(): Promise<GitHubPR[]> {
    // Mock data for development - replace with actual API calls
    const mockPRs: GitHubPR[] = [
      {
        id: 1,
        number: 123,
        title: 'feat: implement AgentDev interface with enhanced styling',
        body: 'This PR implements the AgentDev interface with improved styling and functionality.\n\n- Enhanced drawer styling with white background\n- Improved component type mapping\n- Better form validation\n- Responsive design improvements',
        state: 'merged',
        labels: [
          { name: 'agent-create', color: '0e8a16' },
          { name: 'enhancement', color: 'a2eeef' }
        ],
        user: {
          login: 'fernandofeitosa',
          avatar_url: 'https://github.com/fernandofeitosa.png'
        },
        created_at: '2024-01-15T10:30:00Z',
        updated_at: '2024-01-15T14:45:00Z',
        merged_at: '2024-01-15T14:45:00Z',
        html_url: 'https://github.com/fernandofeitosa/design-system-cria/pull/123',
        head: { ref: 'feature/agent-dev-interface' },
        base: { ref: 'main' }
      },
      {
        id: 2,
        number: 124,
        title: 'fix: resolve AgentDev export issue and improve component functionality',
        body: 'Fixed import path issues and improved component functionality.\n\n- Fixed import path in demo.tsx\n- Improved component exports\n- Enhanced form validation\n- Better error handling',
        state: 'merged',
        labels: [
          { name: 'agent-fix', color: 'd73a4a' },
          { name: 'bug', color: 'd73a4a' }
        ],
        user: {
          login: 'fernandofeitosa',
          avatar_url: 'https://github.com/fernandofeitosa.png'
        },
        created_at: '2024-01-16T09:15:00Z',
        updated_at: '2024-01-16T11:30:00Z',
        merged_at: '2024-01-16T11:30:00Z',
        html_url: 'https://github.com/fernandofeitosa/design-system-cria/pull/124',
        head: { ref: 'fix/agent-dev-exports' },
        base: { ref: 'main' }
      },
      {
        id: 3,
        number: 125,
        title: 'feat: add new Button component variants',
        body: 'Added new button variants for better design system coverage.\n\n- Added ghost variant\n- Added outline variant\n- Improved accessibility\n- Added comprehensive tests',
        state: 'open',
        labels: [
          { name: 'agent-create', color: '0e8a16' },
          { name: 'component', color: '7057ff' }
        ],
        user: {
          login: 'fernandofeitosa',
          avatar_url: 'https://github.com/fernandofeitosa.png'
        },
        created_at: '2024-01-17T08:20:00Z',
        updated_at: '2024-01-17T08:20:00Z',
        html_url: 'https://github.com/fernandofeitosa/design-system-cria/pull/125',
        head: { ref: 'feature/button-variants' },
        base: { ref: 'main' }
      },
      {
        id: 4,
        number: 126,
        title: 'fix: improve Modal component accessibility',
        body: 'Fixed accessibility issues in Modal component.\n\n- Added proper ARIA attributes\n- Improved keyboard navigation\n- Fixed focus management\n- Added screen reader support',
        state: 'closed',
        labels: [
          { name: 'agent-fix', color: 'd73a4a' },
          { name: 'accessibility', color: '1d76db' }
        ],
        user: {
          login: 'fernandofeitosa',
          avatar_url: 'https://github.com/fernandofeitosa.png'
        },
        created_at: '2024-01-18T13:45:00Z',
        updated_at: '2024-01-18T16:20:00Z',
        closed_at: '2024-01-18T16:20:00Z',
        html_url: 'https://github.com/fernandofeitosa/design-system-cria/pull/126',
        head: { ref: 'fix/modal-accessibility' },
        base: { ref: 'main' }
      }
    ];

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return mockPRs;
  }

  async fetchPRsByLabels(labels: string[]): Promise<GitHubPR[]> {
    const allPRs = await this.fetchPRs();
    return allPRs.filter(pr => 
      pr.labels.some(label => labels.includes(label.name))
    );
  }
}

export const useGitHubPRs = () => {
  const [state, setState] = useState<GitHubPRsState>({
    prs: [],
    mergedPRs: [],
    closedPRs: [],
    loading: false,
    error: null,
    lastUpdated: null
  });

  const fetchPRs = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const client = new GitHubAPIClient();
      const allPRs = await client.fetchPRs();
      
      // Filter PRs by agent labels
      const agentPRs = allPRs.filter(pr => 
        pr.labels.some(label => ['agent-create', 'agent-fix'].includes(label.name))
      );
      
      // Categorize PRs
      const mergedPRs = agentPRs.filter(pr => pr.state === 'merged');
      const closedPRs = agentPRs.filter(pr => pr.state === 'closed');
      const openPRs = agentPRs.filter(pr => pr.state === 'open');
      
      setState({
        prs: openPRs,
        mergedPRs,
        closedPRs,
        loading: false,
        error: null,
        lastUpdated: new Date()
      });
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch PRs'
      }));
    }
  }, []);

  const refreshPRs = useCallback(() => {
    fetchPRs();
  }, [fetchPRs]);

  // Auto-refresh every 5 minutes
  useEffect(() => {
    fetchPRs();
    
    const interval = setInterval(fetchPRs, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchPRs]);

  return {
    ...state,
    refreshPRs,
    fetchPRs
  };
};
