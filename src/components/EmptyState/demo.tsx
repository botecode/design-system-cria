import React, { useState } from 'react';
import { EmptyState } from './EmptyState';
import { Button } from '../Button';
import { 
  File, 
  FolderOpen, 
  Search, 
  Plus, 
  MagnifyingGlass, 
  Users, 
  ShoppingCart, 
  ChatCircle, 
  Image,
  MusicNote,
  Video,
  Heart,
  Star,
  Trash,
  Archive,
  Download,
  Upload,
  Share,
  Settings
} from 'phosphor-react';

const EmptyStateDemo = () => {
  const [uploadedFiles, setUploadedFiles] = useState(false);
  const [addedFriends, setAddedFriends] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Empty State / Placeholder</h1>
        <p className="text-gray-600">
          A versatile component for displaying empty states, placeholders, and "no data" scenarios with customizable content and actions.
        </p>
      </div>

      {/* Basic Empty States */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Basic Empty States</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border p-6">
            <EmptyState
              icon={<File size={48} />}
              title="No files found"
              description="Upload your first file to get started"
              action={<Button>Upload File</Button>}
            />
          </div>

          <div className="bg-white rounded-lg border p-6">
            <EmptyState
              icon={<Search size={48} />}
              title="No search results"
              description="Try adjusting your search criteria"
              action={<Button variant="outline">Clear Filters</Button>}
            />
          </div>

          <div className="bg-white rounded-lg border p-6">
            <EmptyState
              icon={<Users size={48} />}
              title="No team members"
              description="Invite people to join your team"
              action={<Button>Invite Members</Button>}
            />
          </div>
        </div>
      </section>

      {/* Variants */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Variants</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Default</h3>
            <div className="bg-white rounded-lg border p-6">
              <EmptyState
                icon={<ShoppingCart size={48} />}
                title="Your cart is empty"
                description="Add some items to get started"
                action={<Button>Start Shopping</Button>}
                variant="default"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Minimal</h3>
            <div className="bg-white rounded-lg border p-6">
              <EmptyState
                icon={<Heart size={32} />}
                title="No favorites yet"
                description="Save items you love"
                variant="minimal"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Compact</h3>
            <div className="bg-white rounded-lg border p-6">
              <EmptyState
                icon={<Star size={32} />}
                title="No reviews"
                description="Be the first to review"
                action={<Button size="sm">Write Review</Button>}
                variant="compact"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Full</h3>
            <div className="bg-white rounded-lg border p-6">
              <EmptyState
                icon={<ChatCircle size={64} />}
                title="No conversations yet"
                description="Start a conversation with your team or reach out to customers"
                action={
                  <div className="flex gap-2">
                    <Button variant="outline">Import Contacts</Button>
                    <Button>Start Chat</Button>
                  </div>
                }
                variant="full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Sizes</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Small</h3>
            <div className="bg-white rounded-lg border p-6">
              <EmptyState
                icon={<Image size={32} />}
                title="No images"
                description="Upload photos"
                action={<Button size="sm">Upload</Button>}
                size="sm"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Medium (Default)</h3>
            <div className="bg-white rounded-lg border p-6">
              <EmptyState
                icon={<MusicNote size={48} />}
                title="No music tracks"
                description="Add your favorite songs"
                action={<Button>Add Music</Button>}
                size="md"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Large</h3>
            <div className="bg-white rounded-lg border p-6">
              <EmptyState
                icon={<Video size={64} />}
                title="No videos uploaded"
                description="Share your first video with the community"
                action={<Button size="lg">Upload Video</Button>}
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Interactive Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-lg font-medium mb-4">File Upload</h3>
            {uploadedFiles ? (
              <div className="text-center py-8">
                <div className="text-green-600 mb-2">
                  <File size={48} className="mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900">Files uploaded successfully!</h4>
                <p className="text-gray-600">Your files are now available in your dashboard.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setUploadedFiles(false)}
                >
                  Reset
                </Button>
              </div>
            ) : (
              <EmptyState
                icon={<Upload size={48} />}
                title="Drop files here"
                description="Or click to browse your computer"
                action={
                  <Button onClick={() => setUploadedFiles(true)}>
                    Choose Files
                  </Button>
                }
                additionalContent={
                  <p className="text-sm text-gray-500 mt-2">
                    Supports: PDF, DOC, JPG, PNG up to 10MB
                  </p>
                }
              />
            )}
          </div>

          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-lg font-medium mb-4">Friends List</h3>
            {addedFriends ? (
              <div className="text-center py-8">
                <div className="text-blue-600 mb-2">
                  <Users size={48} className="mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900">Friends added!</h4>
                <p className="text-gray-600">You now have friends to connect with.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setAddedFriends(false)}
                >
                  Reset
                </Button>
              </div>
            ) : (
              <EmptyState
                icon={<Users size={48} />}
                title="No friends yet"
                description="Connect with people you know"
                action={
                  <Button onClick={() => setAddedFriends(true)}>
                    Find Friends
                  </Button>
                }
                additionalContent={
                  <div className="text-sm text-gray-500 mt-2">
                    <p>• Search by email or username</p>
                    <p>• Import from contacts</p>
                    <p>• Invite via social media</p>
                  </div>
                }
              />
            )}
          </div>
        </div>
      </section>

      {/* Custom Content */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Custom Content</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg border p-6">
            <EmptyState
              icon={<Archive size={48} />}
              title={
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900">Project Archive</h3>
                  <p className="text-sm text-gray-500 mt-1">All your completed projects</p>
                </div>
              }
              description={
                <div className="text-center">
                  <p>You haven't completed any projects yet.</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Projects will appear here once you mark them as complete.
                  </p>
                </div>
              }
              action={
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button>Start New Project</Button>
                  <Button variant="outline">Browse Templates</Button>
                </div>
              }
              additionalContent={
                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Quick Tips:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Use project templates to get started quickly</li>
                    <li>• Set realistic deadlines and milestones</li>
                    <li>• Collaborate with team members</li>
                    <li>• Track your progress regularly</li>
                  </ul>
                </div>
              }
            />
          </div>

          <div className="bg-white rounded-lg border p-6">
            <EmptyState
              icon={<Settings size={48} />}
              title="Configuration Required"
              description={
                <div>
                  <p>Some settings need to be configured before you can use this feature.</p>
                  <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> This is a one-time setup process that takes about 5 minutes.
                    </p>
                  </div>
                </div>
              }
              action={
                <div className="space-y-2">
                  <Button className="w-full">Start Setup</Button>
                  <Button variant="outline" className="w-full">Skip for Now</Button>
                </div>
              }
              variant="full"
            />
          </div>
        </div>
      </section>

      {/* Error States */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Error & Loading States</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border p-6">
            <EmptyState
              icon={<Trash size={48} />}
              title="Something went wrong"
              description="We couldn't load your data. Please try again."
              action={
                <div className="flex gap-2">
                  <Button variant="outline">Go Back</Button>
                  <Button>Try Again</Button>
                </div>
              }
              additionalContent={
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-800">
                    Error code: 500 - Internal Server Error
                  </p>
                </div>
              }
            />
          </div>

          <div className="bg-white rounded-lg border p-6">
            <EmptyState
              icon={<Download size={48} />}
              title="Network connection lost"
              description="Check your internet connection and try again."
              action={<Button>Retry Connection</Button>}
              variant="minimal"
            />
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Usage Examples</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Basic Implementation</h3>
          <pre className="bg-white rounded border p-4 text-sm overflow-x-auto">
            <code>{`import { EmptyState } from 'design-system-cria';
import { File, Upload } from 'phosphor-react';

function MyComponent() {
  return (
    <EmptyState
      icon={<File size={48} />}
      title="No files found"
      description="Upload your first file to get started"
      action={<Button>Upload File</Button>}
    />
  );
}`}</code>
          </pre>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mt-4">
          <h3 className="text-lg font-medium mb-4">With Custom Content</h3>
          <pre className="bg-white rounded border p-4 text-sm overflow-x-auto">
            <code>{`<EmptyState
  icon={<Users size={48} />}
  title="No team members"
  description="Invite people to join your team"
  action={
    <div className="flex gap-2">
      <Button variant="outline">Import CSV</Button>
      <Button>Invite Members</Button>
    </div>
  }
  additionalContent={
    <div className="text-sm text-gray-500 mt-2">
      <p>• Search by email or username</p>
      <p>• Import from contacts</p>
      <p>• Invite via social media</p>
    </div>
  }
  variant="full"
  size="lg"
/>`}</code>
          </pre>
        </div>
      </section>

      {/* Props Documentation */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Props</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prop
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Default
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    icon
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ReactNode
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Icon to display in the empty state
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    title
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ReactNode
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Title text or custom element
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    description
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ReactNode
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Description text or custom element
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    action
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ReactNode
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Action button or custom element
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    variant
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    'default' | 'minimal' | 'compact' | 'full'
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    'default'
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Visual variant of the empty state
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    size
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    'sm' | 'md' | 'lg'
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    'md'
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Size of the empty state
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    centered
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    true
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Whether to center the content
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    additionalContent
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ReactNode
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Additional content below the action
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmptyStateDemo;
