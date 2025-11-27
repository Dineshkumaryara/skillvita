"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";

interface PlayerScore {
  name: string;
  round1: number;
  round2: number | false;
  round3: number | false;
}

export default function MLRITLeaderboard() {
  const [leaderboard, setLeaderboard] = useState<PlayerScore[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    // Fetch leaderboard data from backend
    const fetchLeaderboard = async () => {
      try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5002';
        const response = await fetch(`${backendUrl}/skillvita/games`);
        const result = await response.json();
        
        if (result.success && result.data) {
          // Transform backend data to leaderboard format
          const transformedData: PlayerScore[] = result.data.map((item: any) => ({
            name: item.name,
            round1: item.round1_score,
            round2: item.round2_score,
            round3: item.round3_score,
          }));
          setLeaderboard(transformedData);
        }
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
        // Mock data for development
        setLeaderboard([
          { name: "Player 1", round1: 85, round2: 92, round3: 78 },
          { name: "Player 2", round1: 90, round2: false, round3: false },
          { name: "Player 3", round1: 78, round2: 88, round3: false },
          { name: "Player 4", round1: 95, round2: 89, round3: 91 },
          { name: "Player 5", round1: 82, round2: 87, round3: 85 },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  const calculateTotalScore = (player: PlayerScore): number => {
    let total = player.round1;
    if (player.round2 !== false) total += player.round2;
    if (player.round3 !== false) total += player.round3;
    return total;
  };

  // Filter by search query
  const filteredLeaderboard = leaderboard.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort by total score descending
  const sortedLeaderboard = [...filteredLeaderboard].sort(
    (a, b) => calculateTotalScore(b) - calculateTotalScore(a)
  );

  // Pagination calculations
  const totalPages = Math.ceil(sortedLeaderboard.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedLeaderboard = sortedLeaderboard.slice(startIndex, endIndex);

  // Reset to page 1 when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  if (loading) {
    return (
      <div className="container mx-auto py-10">
        <div className="text-center">Loading leaderboard...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: '#32FE6B' }}>MLRIT Leaderboard</h1>
          <p className="text-muted-foreground" style={{ color: '#32FE6B' }}>
            Player rankings across all rounds
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search players by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

      <Card className="p-6 rounded-xl">
        <Table className="rounded-lg overflow-hidden">
          <TableHeader style={{ backgroundColor: '#014051' }}>
            <TableRow>
              <TableHead className="w-12" style={{ color: '#32FE6B' }}>#</TableHead>
              <TableHead style={{ color: '#32FE6B' }}>Name</TableHead>
              <TableHead className="text-center" style={{ color: '#32FE6B' }}>Round 1</TableHead>
              <TableHead className="text-center" style={{ color: '#32FE6B' }}>Round 2</TableHead>
              <TableHead className="text-center" style={{ color: '#32FE6B' }}>Round 3</TableHead>
              <TableHead className="text-center font-bold" style={{ color: '#32FE6B' }}>Total Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedLeaderboard.map((player, index) => {
              const globalIndex = startIndex + index;
              return (
              <TableRow key={index}>
                <TableCell className="font-medium" style={{ color: '#32FE6B' }}>{globalIndex + 1}</TableCell>
                <TableCell className="font-medium" style={{ color: '#32FE6B' }}>{player.name}</TableCell>
                <TableCell className="text-center" style={{ color: '#32FE6B' }}>{player.round1}</TableCell>
                <TableCell className="text-center" style={{ color: '#32FE6B' }}>
                  {player.round2 !== false ? (
                    player.round2
                  ) : (
                    <span className="text-muted-foreground italic">Not Played</span>
                  )}
                </TableCell>
                <TableCell className="text-center" style={{ color: '#32FE6B' }}>
                  {player.round3 !== false ? (
                    player.round3
                  ) : (
                    <span className="text-muted-foreground italic">Not Played</span>
                  )}
                </TableCell>
                <TableCell className="text-center font-bold text-lg" style={{ color: '#32FE6B' }}>
                  {calculateTotalScore(player)}
                </TableCell>
              </TableRow>
            );
            })}
          </TableBody>
        </Table>

        {sortedLeaderboard.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            {searchQuery
              ? `No players found matching "${searchQuery}"`
              : "No leaderboard data available"}
          </div>
        )}
      </Card>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-muted-foreground" style={{ color: '#32FE6B' }}>
            Showing {startIndex + 1} to {Math.min(endIndex, sortedLeaderboard.length)} of{" "}
            {sortedLeaderboard.length} players
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              variant="outline"
              size="sm"
            >
              Previous
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Show first page, last page, current page, and pages around current
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <Button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      className="w-10"
                    >
                      {page}
                    </Button>
                  );
                } else if (page === currentPage - 2 || page === currentPage + 2) {
                  return (
                    <span key={page} className="px-2 text-muted-foreground">
                      ...
                    </span>
                  );
                }
                return null;
              })}
            </div>
            <Button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              variant="outline"
              size="sm"
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
