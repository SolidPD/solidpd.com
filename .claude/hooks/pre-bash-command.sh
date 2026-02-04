#!/bin/bash
#
# Pre-Bash-Command Hook: Production Merge Protection
#
# This hook prevents unauthorized merges to the main branch.
# It blocks commands that would merge PRs to main without explicit user confirmation.
#
# Location: .claude/hooks/pre-bash-command.sh (project-level)
#

COMMAND="$1"

# Patterns that indicate a merge to main
DANGEROUS_PATTERNS=(
    "gh pr merge.*main"
    "gh pr merge.*--admin"
    "git merge.*main"
    "git push.*main"
    "netlify deploy.*--prod"
)

# Check if the command matches any dangerous pattern
for pattern in "${DANGEROUS_PATTERNS[@]}"; do
    if echo "$COMMAND" | grep -qE "$pattern"; then
        echo "🚫 BLOCKED: Production deployment command detected"
        echo ""
        echo "Command: $COMMAND"
        echo ""
        echo "This command would affect the LIVE production site at https://solidpd.com"
        echo ""
        echo "To proceed, Claude must:"
        echo "  1. Present the production deployment warning to the user"
        echo "  2. Receive explicit confirmation (e.g., 'yes', 'confirmed', 'proceed')"
        echo "  3. Only then attempt this command"
        echo ""
        echo "If the user has already confirmed, re-run this command."
        exit 1
    fi
done

# Command is safe, allow it
exit 0
